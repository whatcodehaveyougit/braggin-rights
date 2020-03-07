package com.codeclan.example.BragginRights.models;

import javax.persistence.*;

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

    @ManyToOne
    @JoinColumn(name="contest_id", nullable = false)
    private Contest Contest;

    public Predictable(Long id, String title, String result, Contest contest) {
        this.id = id;
        this.title = title;
        this.result = result;
        Contest = contest;
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

    public Contest getContest() {
        return Contest;
    }

    public void setContest(Contest contest) {
        Contest = contest;
    }
}

