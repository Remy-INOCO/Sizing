package com.GK.sizing.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Table(name = "item")
@Entity(name="item")
@NoArgsConstructor
public class ItemEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(name = "imageUrl")
    private String imageUrl;
    @Column(name = "wikiUrl")
    private String wikiUrl;
    private String name;
    private String description;
    private Integer size;
    private Integer weight;
}
