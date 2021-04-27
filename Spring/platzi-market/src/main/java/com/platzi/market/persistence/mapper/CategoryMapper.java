package com.platzi.market.persistence.mapper;

import com.platzi.market.domain.Category;
import com.platzi.market.persistence.entity.CategoryEntity;
import org.mapstruct.*;

@Mapper(componentModel = "spring")
public interface CategoryMapper {


    /**
     * This method allows to code CategoryEntity to a Category from Domain
     * @param categoryEntity
     * @return
     */
    @Mappings({
            @Mapping(source = "id", target = "categoryId"),
            @Mapping(source = "description", target = "name"),
            @Mapping(source = "status", target = "active"),
    })
    Category toCategory(CategoryEntity categoryEntity);


    /**
     * This method allows us to decode a Category from Domain to Category from Entity
     * InheritConfiguration allows us to don't rewrite the mapping what field go to another
     * that mapper was implemented in the previous method toCategory
     * Ignore means not keep in mind products information so we already unplug our domain Category from EntityProduct
     */
    @InheritInverseConfiguration
    @Mapping(target = "products", ignore = true)
    CategoryEntity toCategoryEntity(Category category);


}
