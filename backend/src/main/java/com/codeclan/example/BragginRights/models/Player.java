package com.codeclan.example.BragginRights.models;

import javax.persistence.*;
import java.util.ArrayList;

@Entity
@Table(name="players")
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="name")
    private String name;

    @OneToMany
    @JoinColumn(name="prediction_id", nullable=false)
    private ArrayList<Prediction> predictions;

    public Player(Long id, String name, ArrayList<Prediction> predictions) {
        this.id = id;
        this.name = name;
        this.predictions = predictions;
    }

    public Player(){
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ArrayList<Prediction> getPredictions() {
        return predictions;
    }

    public void setPredictions(ArrayList<Prediction> predictions) {
        this.predictions = predictions;
    }
}

