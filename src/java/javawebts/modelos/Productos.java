/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javawebts.modelos;

/**
 *
 * @author Administrator
 */
public class Productos {
    private int id_producto;
    private String nombre_producto;
    private int costo_producto;
    private int precioventa_producto;
   
    private int iva_producto;
    private Marcas marca;
    private Categorias categoria;

    public Productos() {
    }

    public int getId_producto() {
        return id_producto;
    }

    public void setId_producto(int id_producto) {
        this.id_producto = id_producto;
    }

    public String getNombre_producto() {
        return nombre_producto;
    }

    public void setNombre_producto(String nombre_producto) {
        this.nombre_producto = nombre_producto;
    }

    public int getCosto_producto() {
        return costo_producto;
    }

    public void setCosto_producto(int costo_producto) {
        this.costo_producto = costo_producto;
    }

    public int getPrecioventa_producto() {
        return precioventa_producto;
    }

    public void setPrecioventa_producto(int precioventa_producto) {
        this.precioventa_producto = precioventa_producto;
    }

    public int getIva_producto() {
        return iva_producto;
    }

    public void setIva_producto(int iva_producto) {
        this.iva_producto = iva_producto;
    }

    public Marcas getMarca() {
        return marca;
    }

    public void setMarca(Marcas marca) {
        this.marca = marca;
    }

    public Categorias getCategoria() {
        return categoria;
    }

    public void setCategoria(Categorias categoria) {
        this.categoria = categoria;
    }

    public Productos(int id_producto, String nombre_producto, int costo_producto, int precioventa_producto, int iva_producto, Marcas marca, Categorias categoria) {
        this.id_producto = id_producto;
        this.nombre_producto = nombre_producto;
        this.costo_producto = costo_producto;
        this.precioventa_producto = precioventa_producto;
        this.iva_producto = iva_producto;
        this.marca = marca;
        this.categoria = categoria;
    }


  
    
}
