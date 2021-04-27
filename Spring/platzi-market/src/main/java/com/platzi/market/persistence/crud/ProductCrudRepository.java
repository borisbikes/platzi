package com.platzi.market.persistence.crud;

import com.platzi.market.persistence.entity.ProductEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

/** CrudRepository brings the Entity Class and Data type from its @Id data type*/
public interface ProductCrudRepository extends CrudRepository<ProductEntity, Integer> {

    /**
     * Thank's at the JPA's Query Methods functionality allows us to write methods without SQL
     * */

    /**
     * This method returns the Product list by id Category and also ordered by its name
     */
    List<ProductEntity> findByIdCategoryOrderByNameAsc(int idCathegory);

    /**
     * If we want to create a native query we can do it the next step
     */
    @Query(value = "SELECT * FROM productos WHERE id_categoria = ? ORDER BY nombre ASC", nativeQuery = true)
    List<ProductEntity> getProductsByCategory(int idCategory);

    /**
     * Find Product that their stock is running out
     * with Optional is supported to functional programing
     */
    Optional<List<ProductEntity>> findByStockLessThanAndStatus(int stock, boolean status);
}
