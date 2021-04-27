package com.platzi.market.persistence.crud;

import com.platzi.market.persistence.entity.ProductEntity;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@Slf4j
@ExtendWith(SpringExtension.class)
@SpringBootTest
class ProductEntityCrudRepositoryTest {

    @Autowired
    ProductCrudRepository productCrudRepository;

    @Test
    void should_return_a_product_list_from_repository(){
        List<ProductEntity> productEntities = (List<ProductEntity>) productCrudRepository.findAll();
        int productsNum = productEntities.size();
        log.info("Actually we own " + productsNum + " products.");
        assertTrue(productsNum > 0);
    }

    @Test
    void should_return_a_list_product_from_idCategory_nativeQuery(){
        List<ProductEntity> productEntities = (List<ProductEntity>) productCrudRepository.getProductsByCategory(1);
        int productsNum = productEntities.size();
        log.info("Actually we own " + productsNum + " products.");
        assertTrue(productsNum == 10);
    }

    @Test
    void should_return_a_list_product_from_idCategory_Query_JPA_Method(){
        List<ProductEntity> productEntities = (List<ProductEntity>) productCrudRepository.findByIdCategoryOrderByNameAsc(1);
        int productsNum = productEntities.size();
        log.info("Actually we own " + productsNum + " products.");
        assertTrue(productsNum == 10);

    }

    @Test
    void should_return_a_list_roduct_are_running_out_of_stock(){
        Optional<List<ProductEntity>> products = productCrudRepository.findByStockLessThanAndStatus(5,true);
        long productsNum = products.stream().count();
        log.info("Actually we own " + productsNum + " products.");
        assertTrue(productsNum == 1);

    }



}