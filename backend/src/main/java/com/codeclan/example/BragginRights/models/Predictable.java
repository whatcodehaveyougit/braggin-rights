package com.codeclan.example.BragginRights.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="predictables")
public class Predictable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="title")
    private String title;

    @Column(name="result")
    private String result;

    @OneToMany(mappedBy = "predictable")
    private List<Prediction> predictions;

    @ManyToOne
    @JoinColumn(name="contest_id", nullable = false)
    private Contest contest;

    public Predictable(String title, Contest contest) {
        this.id = id;
        this.title = title;
        this.contest = contest;
        this.result = "";
        this.predictions = new ArrayList<Prediction>();

    }



    public Predictable(){
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

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public List<Prediction> getPredictions() {
        return predictions;
    }

    public void setPredictions(List<Prediction> predictions) {
        this.predictions = predictions;
    }

    public Contest getContest() {
        return contest;
    }

    public void setContest(Contest contest) {
        this.contest = contest;
    }
}

