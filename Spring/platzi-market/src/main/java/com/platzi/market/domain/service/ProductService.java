package com.platzi.market.domain.service;

import com.platzi.market.domain.Product;
import com.platzi.market.domain.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * This layer is going to chatting up between the controller and the repository in Domain language
 */
@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> getAll(){
        return productRepository.getAll();
    }

    public Optional<Product> getProduct(int productId){
        return productRepository.getProduct(productId);
    }

    public Optional<List<Product>> getByCategory(int categoryId){
        return productRepository.getByCategory(categoryId);
    }

    public Product save(Product product){
        return productRepository.save(product);
    }

    /**
     * This method allows us to verify if the product exist at the beginning of the transaction to make sure
     * in the element could be deleted, else it return false because it's impossible to delete something
     * that doesn't exist.
     * @param productId
     * @return if exist delete, else false
     */
    public  boolean delete(int productId){
        return getProduct(productId).map(prod -> {
            productRepository.delete(productId);
            return true;
        }).orElse(false);
    }
}
