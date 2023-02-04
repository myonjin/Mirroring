package com.ssafysignal.api.signalweek.dto.request;

import io.swagger.annotations.ApiModel;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ApiModel(value = "SignalweekPptFileRegistRequest", description = "시그널 위크 ppt 파일 등록 정보")
public class SignalweekPptFileRegistRequest {

    @Schema(name = "ppt file seq")
    private Integer pptFileSeq;

    @Schema(name = "파일명")
    private String name;

    @Schema(name = "파일 크기")
    private Integer size;

    @Schema(name = "파일 타입")
    private String type;

    @Schema(name = "URL")
    private String url;
}
