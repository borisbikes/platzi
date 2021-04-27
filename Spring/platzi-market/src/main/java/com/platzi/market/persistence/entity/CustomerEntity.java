package com.platzi.market.persistence.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Table(name = "clientes")
public class CustomerEntity {

    @Id
    @Column(name = "id")
    private String id;

    @Column(name = "nombre")
    private String name;

    @Column(name = "apellidos")
    private String lastName;

    @Column(name = "celular")
    private Integer mobile;

    @Column(name = "direccion")
    private String address;

    @Column(name = "correo_electronico")
    private String email;

    @Column(name = "estado")
    private String status;

    /**
     * Mapped by makes reference to the name of the field from Purchase Entity that has a relation
     */
    @OneToMany(mappedBy = "customer")
    private List<PurchaseEntity> purchases;

}
