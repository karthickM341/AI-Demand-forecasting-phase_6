from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.schemas.quality import (
    QualityRuleCreate,
    QualityRuleUpdate,
)
from app.services.quality_service import QualityService

router = APIRouter(
    prefix="/quality",
    tags=["Data Quality Management"],
)


@router.get("/dashboard")
def quality_dashboard(
    organization_id: int = Query(..., gt=0),
    db: Session = Depends(get_db),
):
    """
    Data quality dashboard overview.
    """
    return QualityService.get_dashboard(
        db=db,
        organization_id=organization_id,
    )


@router.get("/scores")
def quality_scores(
    organization_id: int = Query(..., gt=0),
    dataset_id: int | None = None,
    db: Session = Depends(get_db),
):
    """
    Dataset quality scores.
    """
    return QualityService.get_quality_scores(
        db=db,
        organization_id=organization_id,
        dataset_id=dataset_id,
    )


@router.get("/validation")
def validation_summary(
    dataset_id: int,
    db: Session = Depends(get_db),
):
    """
    Dataset validation summary.
    """
    return QualityService.get_validation_summary(
        db=db,
        dataset_id=dataset_id,
    )


@router.get("/issues")
def quality_issues(
    organization_id: int = Query(..., gt=0),
    severity: str | None = None,
    db: Session = Depends(get_db),
):
    """
    Data quality issues and anomalies.
    """
    return QualityService.get_quality_issues(
        db=db,
        organization_id=organization_id,
        severity=severity,
    )


@router.get("/reports")
def quality_reports(
    organization_id: int = Query(..., gt=0),
    db: Session = Depends(get_db),
):
    """
    Data quality reports.
    """
    return QualityService.generate_report(
        db=db,
        organization_id=organization_id,
    )


@router.post(
    "/rules",
    status_code=status.HTTP_201_CREATED,
)
def create_quality_rule(
    payload: QualityRuleCreate,
    db: Session = Depends(get_db),
):
    """
    Create validation rule.
    """
    return QualityService.create_rule(
        db=db,
        payload=payload,
    )


@router.put("/rules/{rule_id}")
def update_quality_rule(
    rule_id: int,
    payload: QualityRuleUpdate,
    db: Session = Depends(get_db),
):
    """
    Update validation rule.
    """
    rule = QualityService.update_rule(
        db=db,
        rule_id=rule_id,
        payload=payload,
    )

    if not rule:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Rule not found",
        )

    return rule


@router.delete("/rules/{rule_id}")
def delete_quality_rule(
    rule_id: int,
    db: Session = Depends(get_db),
):
    """
    Disable quality rule.
    """
    QualityService.delete_rule(
        db=db,
        rule_id=rule_id,
    )

    return {
        "success": True,
        "message": "Quality rule removed successfully",
    }


@router.post("/scan/{dataset_id}")
def scan_dataset(
    dataset_id: int,
    db: Session = Depends(get_db),
):
    """
    Run quality scan on dataset.
    """
    return QualityService.scan_dataset(
        db=db,
        dataset_id=dataset_id,
    )


@router.get("/metrics")
def quality_metrics(
    organization_id: int = Query(..., gt=0),
    db: Session = Depends(get_db),
):
    """
    Organization quality metrics.
    """
    return QualityService.get_metrics(
        db=db,
        organization_id=organization_id,
    )