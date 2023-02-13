package com.ssafysignal.api.admin.dto.Response;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class FindAllAdminUserResponse {
    private List<FindAdminUserResponse> blackUserList;
    private Long count;
}
