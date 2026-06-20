from apscheduler.schedulers.background import BackgroundScheduler
from apscheduler.triggers.cron import CronTrigger

from app.services.forecast_service import ForecastService
from app.services.report_service import ReportService
from app.services.quality_service import QualityService
from app.services.notification_service import NotificationService
from app.services.workflow_service import WorkflowService


class EnterpriseScheduler:
    """
    Central scheduler for automated jobs.
    """

    scheduler = BackgroundScheduler(
        timezone="UTC"
    )

    @classmethod
    def start(cls) -> None:
        """
        Register and start scheduled jobs.
        """

        cls.scheduler.add_job(
            cls.run_forecast_refresh,
            CronTrigger(hour="*/6"),
            id="forecast_refresh",
            replace_existing=True,
        )

        cls.scheduler.add_job(
            cls.run_report_generation,
            CronTrigger(hour=1),
            id="report_generation",
            replace_existing=True,
        )

        cls.scheduler.add_job(
            cls.run_quality_scan,
            CronTrigger(hour=2),
            id="quality_scan",
            replace_existing=True,
        )

        cls.scheduler.add_job(
            cls.run_workflows,
            CronTrigger(minute="*/15"),
            id="workflow_execution",
            replace_existing=True,
        )

        cls.scheduler.add_job(
            cls.send_notifications,
            CronTrigger(minute="*/10"),
            id="notifications",
            replace_existing=True,
        )

        if not cls.scheduler.running:
            cls.scheduler.start()

    @staticmethod
    def run_forecast_refresh():
        """
        Automated forecast refresh.
        """
        ForecastService.auto_refresh_forecasts()

    @staticmethod
    def run_report_generation():
        """
        Automated report generation.
        """
        ReportService.generate_scheduled_reports()

    @staticmethod
    def run_quality_scan():
        """
        Dataset quality validation.
        """
        QualityService.run_scheduled_scans()

    @staticmethod
    def run_workflows():
        """
        Execute pending workflows.
        """
        WorkflowService.execute_scheduled_workflows()

    @staticmethod
    def send_notifications():
        """
        Process notification queue.
        """
        NotificationService.process_queue()

    @classmethod
    def shutdown(cls):
        """
        Gracefully stop scheduler.
        """
        if cls.scheduler.running:
            cls.scheduler.shutdown()