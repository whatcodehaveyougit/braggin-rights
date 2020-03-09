package com.codeclan.example.BragginRights.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "contests")
public class Contest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="title")
    private String title;

    @JsonIgnore
    @OneToMany(mappedBy = "contest")
    private List<Guessable> guessables;


    public Contest(String title) {
        this.id = id;
        this.title = title;
        this.guessables = new ArrayList<Guessable>();
    }

    public Contest(){
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public List<Guessable> getGuessables() {
        return guessables;
    }

    public void setGuessables(ArrayList<Guessable> guessables) {
        this.guessables = guessables;
    }

}

