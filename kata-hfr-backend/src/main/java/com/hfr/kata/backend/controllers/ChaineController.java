package com.hfr.kata.backend.controllers;

import com.hfr.kata.backend.exceptions.AppException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hfr.kata.backend.dtos.ChaineDto;
import com.hfr.kata.backend.services.KataService;

@RequiredArgsConstructor
@RestController
public class ChaineController {
	
	private final KataService kataService;

	@GetMapping("/kataHfr/getChaine")
	public ResponseEntity<ChaineDto> getChaine(@RequestParam Integer chaine) {

		if(chaine == null) {
			throw new AppException("il faut saisir un input", HttpStatus.NO_CONTENT);
		}

		return ResponseEntity.ok(KataService.getChaine(chaine));
	}

}
