package com.GK.sizing.service;

import com.GK.sizing.entity.ItemEntity;
import com.GK.sizing.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ItemService {
    @Autowired
    ItemRepository itemRepository;
    private ItemEntity getItemByName(String name){
        return itemRepository.findAllByName(name).get(0);
    }

    public ItemEntity getItemBySizeOrWeight(String size, String weight, String name){
        ItemEntity item0 = getItemByName(name);
        Integer s0 = item0.getSize();
        Integer w0 = item0.getWeight();
        List<ItemEntity> items = new ArrayList<>();
        if(size != null && "lower".equals(size)){
            items = itemRepository.findAllBySizeLessThanOrderBySizeDesc(s0);
        }else if(size != null && "taller".equals(size)){
            items = itemRepository.findAllBySizeGreaterThanOrderBySizeAsc(s0);
        }
        List<ItemEntity> itemw = new ArrayList<>();
        if(weight != null && "heavier".equals(weight)){
            itemw = itemRepository.findAllByWeightGreaterThanOrderByWeightAsc(w0);
        }else if(weight != null && "lighter".equals(weight)){
            itemw = itemRepository.findAllByWeightLessThanOrderByWeightDesc(w0);
        }
        Integer s = items.size();
        Integer w = itemw.size();
        if (s == 0 && w ==0){
            return item0;
        }else if(s>0 && w==0){
            return items.get(0);
        }else if(s==0 && w>0){
            return itemw.get(0);
        }else{
            List<Long> ids = items.stream().map(ItemEntity::getId).collect(Collectors.toList());
            for(ItemEntity en:itemw){
                if(ids.contains(en.getId())) return en;
            }
            return null;
        }
    }

    public ItemEntity getHumain(){
        return getItemByName("human");
    }
}
