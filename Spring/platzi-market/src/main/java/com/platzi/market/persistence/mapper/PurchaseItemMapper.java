package com.platzi.market.persistence.mapper;

import com.platzi.market.domain.PurchaseItem;
import com.platzi.market.persistence.entity.PurchaseProductEntity;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

@Mapper(componentModel = "spring", uses = {ProductMapper.class})
public interface PurchaseItemMapper {

    /**
     * If the source name field has the same name with the target ones, It's  not necessary to set the @mapping
     * for example sorce = quantity - target = quantity.
     * @param purchaseProductEntity
     * @return
     */
    @Mappings({
            @Mapping(source = "id.idProduct", target = "productId"),
            @Mapping(source = "status", target = "active")
    })
    PurchaseItem toPurchaseItem(PurchaseProductEntity purchaseProductEntity);

    @InheritInverseConfiguration
    @Mappings({
            @Mapping(target = "purchase", ignore = true),
            @Mapping(target = "product", ignore = true),
            @Mapping(target = "id.idPurchase", ignore = true),

    })
    PurchaseProductEntity toPurchaseProductEntity( PurchaseItem purchaseItem);
}
