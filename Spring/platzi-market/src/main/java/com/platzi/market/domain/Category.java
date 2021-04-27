package com.platzi.market.domain;

import lombok.Data;

@Data
public class Category {
    private int categoryId;
    private String name;
    private boolean active;
}
