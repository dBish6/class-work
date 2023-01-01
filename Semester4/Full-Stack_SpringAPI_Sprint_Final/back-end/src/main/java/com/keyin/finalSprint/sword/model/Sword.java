package com.keyin.finalSprint.sword.model;

import jakarta.persistence.*;

@Entity
@Table(name = "sword")
public class Sword {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "sword_id")
    private long sword_id;

    @Column(nullable = false, length = 60)
    private String name;
    @Column(nullable = false, length = 60)
    private String type;
    @Column(nullable = false)
    private double length;
    @Column(nullable = false)
    private double mass;
    @Column(nullable = false)
    private double price;
    @Column(nullable = false, columnDefinition = "Text")
    private String description;
    @Column(nullable = false, length = 80)
    private String image_url;

    public Sword() {
    }

    public Sword(String name, String type, double length, double mass, double price, String description, String image_url) {
        this.name = name;
        this.type = type;
        this.length = length;
        this.mass = mass;
        this.price = price;
        this.description = description;
        this.image_url = image_url;
    }
    public Sword(long id,String name, String type, double length, double mass, double price, String description, String image_url) {
        this.sword_id = id;
        this.name = name;
        this.type = type;
        this.length = length;
        this.mass = mass;
        this.price = price;
        this.description = description;
        this.image_url = image_url;
    }

    public void setSword_id(long sword_id) {
        this.sword_id = sword_id;
    }

    public long getSword_id() {
        return sword_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public double getLength() {
        return length;
    }

    public void setLength(double length) {
        this.length = length;
    }

    public double getMass() {
        return mass;
    }

    public void setMass(double mass) {
        this.mass = mass;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImage_url() {
        return image_url;
    }

    public void setImage_url(String image_url) {
        this.image_url = image_url;
    }

    @Override
    public String toString() {
        return "Sword{" +
                "sword_id='" + sword_id + '\'' +
                ", name='" + name + '\'' +
                ", type='" + type + '\'' +
                ", length=" + length +
                ", mass=" + mass +
                ", price=" + price +
                ", description='" + description + '\'' +
                ", image_url='" + image_url + '\'' +
                '}';
    }
}
