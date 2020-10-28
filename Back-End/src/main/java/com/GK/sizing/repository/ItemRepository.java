package com.GK.sizing.repository;

import com.GK.sizing.entity.ItemEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItemRepository extends JpaRepository<ItemEntity, Long> {
    List<ItemEntity> findAllByName(String name);
    List<ItemEntity> findAllBySizeGreaterThanOrderBySizeAsc(Integer size);
    List<ItemEntity> findAllBySizeLessThanOrderBySizeDesc(Integer size);
    List<ItemEntity> findAllByWeightGreaterThanOrderByWeightAsc(Integer weight);
    List<ItemEntity> findAllByWeightLessThanOrderByWeightDesc(Integer weight);

}
