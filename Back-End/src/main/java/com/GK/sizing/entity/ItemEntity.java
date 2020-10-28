package com.GK.sizing.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Table(name = "item")
@Entity(name = "item")
@NoArgsConstructor
public class ItemEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	@Column(name = "name")
	private String name;
	@Column(name = "description")
	private String description;
	@Column(name = "imageUrl")
	private String imageUrl;
	@Column(name = "size")
	private Integer size;
	@Column(name = "weight")
	private Integer weight;
	@Column(name = "wikiUrl")
	private String wikiUrl;

	public Long getId() {
		return this.id;
	}

	public void setId(final Long id) {
		this.id = id;
	}

	public String getImageUrl() {
		return this.imageUrl;
	}

	public void setImageUrl(final String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public String getWikiUrl() {
		return this.wikiUrl;
	}

	public void setWikiUrl(final String wikiUrl) {
		this.wikiUrl = wikiUrl;
	}

	public String getName() {
		return this.name;
	}

	public void setName(final String name) {
		this.name = name;
	}

	public String getDescription() {
		return this.description;
	}

	public void setDescription(final String description) {
		this.description = description;
	}

	public Integer getSize() {
		return this.size;
	}

	public void setSize(final Integer size) {
		this.size = size;
	}

	public Integer getWeight() {
		return this.weight;
	}

	public void setWeight(final Integer weight) {
		this.weight = weight;
	}

}
