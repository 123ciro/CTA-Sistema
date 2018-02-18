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
public class Stocks {

    private int id_stock;
    private int cantidad_stock;
    Productos producto;
  
    private int min_stock;
    private int max_stock;
    private int precio_stock;

    public Stocks() {
    }

    public int getId_stock() {
        return id_stock;
    }

    public void setId_stock(int id_stock) {
        this.id_stock = id_stock;
    }

    public int getCantidad_stock() {
        return cantidad_stock;
    }

    public void setCantidad_stock(int cantidad_stock) {
        this.cantidad_stock = cantidad_stock;
    }

    public Productos getProducto() {
        return producto;
    }

    public void setProducto(Productos producto) {
        this.producto = producto;
    }

  
    public int getMin_stock() {
        return min_stock;
    }

    public void setMin_stock(int min_stock) {
        this.min_stock = min_stock;
    }

    public int getMax_stock() {
        return max_stock;
    }

    public void setMax_stock(int max_stock) {
        this.max_stock = max_stock;
    }

    public int getPrecio_stock() {
        return precio_stock;
    }

    public void setPrecio_stock(int precio_stock) {
        this.precio_stock = precio_stock;
    }

    public Stocks(int id_stock, int cantidad_stock, Productos producto, Establecimientos establecimiento, int min_stock, int max_stock, int precio_stock) {
        this.id_stock = id_stock;
        this.cantidad_stock = cantidad_stock;
        this.producto = producto;
       
        this.min_stock = min_stock;
        this.max_stock = max_stock;
        this.precio_stock = precio_stock;
    }


}
