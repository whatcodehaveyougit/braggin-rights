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
    private List<Predictable> predictables;


    public Contest(Long id, String title) {
        this.id = id;
        this.title = title;
        this.predictables = new ArrayList<Predictable>();
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

    public List<Predictable> getPredictables() {
        return predictables;
    }

    public void setPredictables(ArrayList<Predictable> predictables) {
        this.predictables = predictables;
    }

}

