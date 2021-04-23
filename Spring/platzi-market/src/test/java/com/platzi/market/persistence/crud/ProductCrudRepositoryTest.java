package com.platzi.market.persistence.crud;

import com.platzi.market.persistence.entity.Product;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@Slf4j
@ExtendWith(SpringExtension.class)
@SpringBootTest
class ProductCrudRepositoryTest {

    @Autowired
    ProductCrudRepository productCrudRepository;

    @Test
    void shoud_return_a_product_list_from_repository(){
        List<Product> products = (List<Product>) productCrudRepository.findAll();
        int productsNum = products.size();
        log.info("Actually we own " + productsNum + " products.");
        assertTrue(productsNum > 0);
    }


}