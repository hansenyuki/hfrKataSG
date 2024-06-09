package com.hfr.kata.backend.dtos;

import jakarta.validation.constraints.NotNull;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Getter
@Setter
public class ChaineDto {

	@NotNull
	private String chaine;
}
