package com.hfr.kata.backend.services;

import org.apache.tomcat.util.bcel.Const;
import org.springframework.stereotype.Service;

import com.hfr.kata.backend.dtos.ChaineDto;

@Service
public class KataService {
	
	public static ChaineDto getChaine(int chaine) {
		final String FOO = "FOO";
		final String BAR = "BAR";
		final String QUIX = "QUIX";

		StringBuilder result = new StringBuilder();

		//priorité à la division
		if (chaine % 3 == 0) {
			result.append(FOO);
		}
		if (chaine % 5 == 0) {
			result.append(BAR);
		}

		//Vérification si l'entrée contient 3,5 ou 7
		for (char c : String.valueOf(chaine).toCharArray()) {
			switch (c) {
				case '3': result.append(FOO); break;
				case '5': result.append(BAR); break;
				case '7': result.append(QUIX); break;
				default: break;
			}

		}

		//si aucun résultat
		if (result.isEmpty()) {
			return new ChaineDto(Integer.toString(chaine));
		}

		return new ChaineDto(result.toString());
	}

}
