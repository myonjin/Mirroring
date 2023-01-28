package com.ssafysignal.api.apply.dto.Response;

import com.ssafysignal.api.common.entity.CommonCode;
import io.swagger.annotations.ApiModel;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
@ApiModel(value = "ApplyWriterFindResponse", description = "공고 지원자 기준 지원서 목록 항목")
public class ApplyApplyerFindResponse {
    @Schema(description = "지원서 Seq", example = "1")
    private Integer applySeq;
    @Schema(description = "프로젝트 주제", example = "프로젝트 팀 빌딩 서비스 시그널")
    private String subject;
    @Schema(description = "지원자가 신청한 사전 미팅 시간")
    private LocalDateTime meetingDt;
    @Schema(description = "지원서의 진행 상황")
    private CommonCode statusCode;
}