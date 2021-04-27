package com.platzi.market.persistence.mapper;

import com.platzi.market.domain.Purchase;
import com.platzi.market.persistence.entity.PurchaseEntity;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

import java.util.List;

@Mapper(componentModel = "spring", uses={PurchaseItemMapper.class})
public interface PurchaseMapper {

    @Mappings({
        @Mapping(source = "id", target = "purchaseId"),
        @Mapping(source = "idCustomer", target = "clientId"),
        @Mapping(source = "products", target = "items"),
    })
    Purchase toPurchase(PurchaseEntity purchaseEntity);

    List<Purchase> toPurchases(List<PurchaseEntity> entityList);

    @InheritInverseConfiguration
    @Mapping(target = "customer", ignore = true)
    PurchaseEntity toPurchaseEntity(Purchase purchase);


}
