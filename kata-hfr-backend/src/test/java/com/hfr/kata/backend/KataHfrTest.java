package com.hfr.kata.backend;
import com.hfr.kata.backend.services.KataService;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class KataHfrTest {
    @Test
    public void testDivisiblePar3() {
        assertEquals("FOO", KataService.getChaine(9).getChaine());
        assertEquals("FOO", KataService.getChaine(12).getChaine());
    }

    @Test
    public void testContient3() {
        assertEquals("FOO", KataService.getChaine(23).getChaine());
    }

    @Test
    public void testContient3EtDivisiblePar3() {
        assertEquals("FOOFOO", KataService.getChaine(3).getChaine());
    }

    @Test
    public void testDivisiblePar5() {
        assertEquals("BARBAR", KataService.getChaine(25).getChaine());
    }

    @Test
    public void testContient5() {
        assertEquals("BAR", KataService.getChaine(56).getChaine());
    }

    @Test
    public void testContient5EtDivisiblePar5() {
        assertEquals("BARBAR", KataService.getChaine(5).getChaine());
    }

    @Test
    public void testContient3Et5() {
        assertEquals("BARFOO", KataService.getChaine(53).getChaine());
    }

    @Test
    public void testContient7() {
        assertEquals("QUIX", KataService.getChaine(17).getChaine());
    }

    @Test
    public void testDivisiblePar3EtContient7() {
        assertEquals("FOOQUIX", KataService.getChaine(27).getChaine());
    }

    @Test
    public void testResultatMixte() {
        assertEquals("BARFOOBAR", KataService.getChaine(35).getChaine());
    }

    @Test
    public void testAucunMatch() {
        assertEquals("1", KataService.getChaine(1).getChaine());
        assertEquals("8", KataService.getChaine(8).getChaine());
    }
}
