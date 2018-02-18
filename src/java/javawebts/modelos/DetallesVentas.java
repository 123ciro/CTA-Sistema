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
public class DetallesVentas {
    private int id_detalleventa;
    private int cantidad_productoventa;
    private int costo;
    private Productos producto;
    private Ventas venta;
    private int total_detalleventa;
    private String letra;

    public DetallesVentas() {
    }

    public int getId_detalleventa() {
        return id_detalleventa;
    }

    public void setId_detalleventa(int id_detalleventa) {
        this.id_detalleventa = id_detalleventa;
    }

    public int getCantidad_productoventa() {
        return cantidad_productoventa;
    }

    public void setCantidad_productoventa(int cantidad_productoventa) {
        this.cantidad_productoventa = cantidad_productoventa;
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

    public Ventas getVenta() {
        return venta;
    }

    public void setVenta(Ventas venta) {
        this.venta = venta;
    }

    public int getTotal_detalleventa() {
        return total_detalleventa;
    }

    public void setTotal_detalleventa(int total_detalleventa) {
        this.total_detalleventa = total_detalleventa;
    }

    public String getLetra() {
        return letra;
    }

    public void setLetra(String letra) {
        this.letra = letra;
    }

    public DetallesVentas(int id_detalleventa, int cantidad_productoventa, int costo, Productos producto, Ventas venta, int total_detalleventa, String letra) {
        this.id_detalleventa = id_detalleventa;
        this.cantidad_productoventa = cantidad_productoventa;
        this.costo = costo;
        this.producto = producto;
        this.venta = venta;
        this.total_detalleventa = total_detalleventa;
        this.letra = letra;
    }

   
}
