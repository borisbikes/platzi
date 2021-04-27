package com.platzi.market.domain.repository;

import com.platzi.market.domain.Purchase;

import java.util.List;
import java.util.Optional;

public interface PurchaseRepository {
    List<Purchase> getAll();
    /** we use optional to avoid if the client doesn't have any purchase*/
    Optional<List<Purchase>> getByClient(String clientId);
    Purchase save(Purchase purchase);
}
