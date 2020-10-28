package com.GK.sizing.controller;

import com.GK.sizing.entity.ItemEntity;
import com.GK.sizing.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class ItemController {
    @Autowired
    ItemService itemService;
    @RequestMapping(value = "/item", method = RequestMethod.GET, produces = "application/json")
    public ItemEntity getItem(@RequestParam(required = false) String size, @RequestParam(required = false) String weight, @RequestParam String name){
        return itemService.getItemBySizeOrWeight(size, weight, name);
    }

    @RequestMapping(value = "/human", method = RequestMethod.GET, produces = "application/json")
    public ItemEntity getHumain(){
        return itemService.getHumain();
    }
}
