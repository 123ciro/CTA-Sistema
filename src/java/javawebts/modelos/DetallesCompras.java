/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javawebts.modelos;

/**
 *
 * @author ALUMNO
 */
public class DetallesCompras {
    private int id_detallecompra;
    private int cantidad_productocompra;
    private int costo;
    private Productos producto;
    private Compras compra;
    private int total_detallecompra;

    public DetallesCompras() {
    }

    public DetallesCompras(int id_detallecompra, int cantidad_productocompra, int costo, Productos producto, Compras compra, int total_detallecompra) {
        this.id_detallecompra = id_detallecompra;
        this.cantidad_productocompra = cantidad_productocompra;
        this.costo = costo;
        this.producto = producto;
        this.compra = compra;
        this.total_detallecompra = total_detallecompra;
    }

    public int getId_detallecompra() {
        return id_detallecompra;
    }

    public void setId_detallecompra(int id_detallecompra) {
        this.id_detallecompra = id_detallecompra;
    }

    public int getCantidad_productocompra() {
        return cantidad_productocompra;
    }

    public void setCantidad_productocompra(int cantidad_productocompra) {
        this.cantidad_productocompra = cantidad_productocompra;
    }

    public int getCosto() {
        return costo;
    }

    public void setCosto(int costo) {
        this.costo = costo;
    }

    public Productos getProducto() {
        return producto;
    }

    public void setProducto(Productos producto) {
        this.producto = producto;
    }

    public Compras getCompra() {
        return compra;
    }

    public void setCompra(Compras compra) {
        this.compra = compra;
    }

    public int getTotal_detallecompra() {
        return total_detallecompra;
    }

    public void setTotal_detallecompra(int total_detallecompra) {
        this.total_detallecompra = total_detallecompra;
    }

   

   
}
