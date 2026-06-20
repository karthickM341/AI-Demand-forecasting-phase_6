from collections import defaultdict
from fastapi import WebSocket, WebSocketDisconnect


class WebSocketManager:
    """
    Enterprise WebSocket Connection Manager
    """

    def __init__(self):
        self.connections: dict[int, list[WebSocket]] = defaultdict(list)

    async def connect(
        self,
        websocket: WebSocket,
        organization_id: int,
    ) -> None:
        """
        Accept and register connection.
        """
        await websocket.accept()

        self.connections[organization_id].append(
            websocket
        )

    def disconnect(
        self,
        websocket: WebSocket,
        organization_id: int,
    ) -> None:
        """
        Remove disconnected socket.
        """
        if websocket in self.connections[organization_id]:
            self.connections[organization_id].remove(
                websocket
            )

        if not self.connections[organization_id]:
            self.connections.pop(
                organization_id,
                None,
            )

    async def send_personal_message(
        self,
        message: dict,
        websocket: WebSocket,
    ) -> None:
        """
        Send message to single client.
        """
        await websocket.send_json(message)

    async def broadcast(
        self,
        organization_id: int,
        message: dict,
    ) -> None:
        """
        Broadcast message to organization.
        """

        clients = self.connections.get(
            organization_id,
            []
        )

        disconnected = []

        for client in clients:
            try:
                await client.send_json(message)

            except Exception:
                disconnected.append(client)

        for client in disconnected:
            self.disconnect(
                client,
                organization_id,
            )

    async def broadcast_forecast_update(
        self,
        organization_id: int,
        forecast_id: int,
    ) -> None:
        """
        Real-time forecast updates.
        """
        await self.broadcast(
            organization_id,
            {
                "event": "forecast_updated",
                "forecast_id": forecast_id,
            },
        )

    async def broadcast_notification(
        self,
        organization_id: int,
        title: str,
        message: str,
    ) -> None:
        """
        Real-time notifications.
        """
        await self.broadcast(
            organization_id,
            {
                "event": "notification",
                "title": title,
                "message": message,
            },
        )

    async def broadcast_workflow_event(
        self,
        organization_id: int,
        workflow_name: str,
        status: str,
    ) -> None:
        """
        Workflow execution updates.
        """
        await self.broadcast(
            organization_id,
            {
                "event": "workflow",
                "workflow": workflow_name,
                "status": status,
            },
        )

    async def broadcast_executive_alert(
        self,
        organization_id: int,
        alert: str,
    ) -> None:
        """
        Executive command center alerts.
        """
        await self.broadcast(
            organization_id,
            {
                "event": "executive_alert",
                "message": alert,
            },
        )


manager = WebSocketManager()