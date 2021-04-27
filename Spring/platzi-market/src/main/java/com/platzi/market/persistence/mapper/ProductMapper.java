package com.platzi.market.persistence.mapper;

import com.platzi.market.domain.Product;
import com.platzi.market.persistence.entity.ProductEntity;
import org.mapstruct.*;

import java.util.List;

/**
 * This class enables to translate one element in other
 * @Mapping adds us the spring compatibily and uses inherit the mapper from CategoryMapper
 * reuses the code that we've already written
 */
@Mapper( componentModel = "spring", uses = {CategoryMapper.class})
public interface ProductMapper {


    /**
     * This method translate from ProductEntity to ProductDomain
     * inside the mapping source means name file origin Entity  to destiny target
     * the name file to domain
     * Having a look some notes it say if the entities and domain object has the same names, it could be avoid mapping them
     * @param productEntity
     * @return productDomain
     */
    @Mappings({
            @Mapping(source = "id", target = "productId"),
            @Mapping(source = "idCategory", target = "categoryId"),
            @Mapping(source = "salePrice", target = "price"),
            @Mapping(source = "status", target = "active"),

    })
    Product toProduct(ProductEntity productEntity);

    /**
     * This method allows us to make a conversion in list terms, that's not necessary to write again the
     * mapping code, cause it was already written in the previous method, he knows what are talking about
     * @param productEntities
     * @return
     */
    List<Product> toProducts(List<ProductEntity> productEntities);

    /**
     * This method translate from ProductDomain to ProductEntity
     * we are going to ignore the field that we don't want to take in account
     * @param product productDomain
     * @return productEntity
     */
    @InheritInverseConfiguration
    @Mapping(target = "barCode", ignore = true)
    ProductEntity toProductEntity(Product product);


}
