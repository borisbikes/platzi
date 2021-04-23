package com.platzi.market.persistence.crud;

import com.platzi.market.persistence.entity.Product;
import org.springframework.data.repository.CrudRepository;

/** CrudRepository brings the Entity Class and Data type from its @Id data type*/
public interface ProductCrudRepository extends CrudRepository<Product, Integer> {
}
