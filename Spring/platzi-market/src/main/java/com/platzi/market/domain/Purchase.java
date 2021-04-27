package com.platzi.market.domain;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class Purchase {

    private int purchaseId;
    private String clientId;
    private LocalDateTime date;
    private String paymentMethod;
    private String comment;
    /** the item has already payed or not, pending*/
    private String status;
    private List<PurchaseItem> items;

}
