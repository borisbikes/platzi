package com.platzi.market.persistence;

import com.platzi.market.domain.Purchase;
import com.platzi.market.persistence.entity.PurchaseEntity;
import com.platzi.market.persistence.mapper.PurchaseMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.platzi.market.persistence.crud.PurchaseCrudRepository;

import java.util.List;
import java.util.Optional;

@Repository
public class PurchaseRepository implements com.platzi.market.domain.repository.PurchaseRepository {

    @Autowired
    private PurchaseCrudRepository purchaseCrudRepository;

    @Autowired
    private PurchaseMapper mapper;

    @Override
    public List<Purchase> getAll() {
        return mapper.toPurchases((List<PurchaseEntity>) purchaseCrudRepository.findAll());
    }

    @Override
    public Optional<List<Purchase>> getByClient(String clientId) {
        return purchaseCrudRepository.findByIdCustomer(clientId)
                .map(prod -> mapper.toPurchases(prod));
    }

    /**
     * The Purchase is going to save in cascade, because products must know wich purchase they belong
     * To guaranty that each product knows which product it belongs it need to go through ,
     * Also we need to set this propertie 'CASCADE' in our Entity Product from this Purchase
     * CascadeType.ALL
     * @param purchase
     * @return
     */
    @Override
    public Purchase save(Purchase purchase) {
        PurchaseEntity purchaseEntity = mapper.toPurchaseEntity(purchase);
        purchaseEntity.getProducts().forEach(prod -> prod.setPurchase(purchaseEntity));
        return mapper.toPurchase(purchaseCrudRepository.save(purchaseEntity));
    }
}
