package com.codeclan.example.BragginRights.models;

import javax.persistence.*;

@Entity
@Table(name="predictions")
public class Prediction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name="player_id", nullable = false)
    private Player player;

    @OneToOne
    @JoinColumn(name="predictable_id")
    private Predictable predictable;

    @Column(name="prediction")
    private String prediction;

    public Prediction(Long id, Player player, Predictable predictable, String prediction) {
        this.id = id;
        this.player = player;
        this.predictable = predictable;
        this.prediction = prediction;
    }

    public Prediction(){
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Player getPlayer() {
        return player;
    }

    public void setPlayer(Player player) {
        this.player = player;
    }

    public Predictable getPredictable() {
        return predictable;
    }

    public void setPredictable(Predictable predictable) {
        this.predictable = predictable;
    }

    public String getPrediction() {
        return prediction;
    }

    public void setPrediction(String prediction) {
        this.prediction = prediction;
    }
}

