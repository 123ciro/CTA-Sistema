/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javawebts.modelos;

import java.sql.Date;

/**
 *
 * @author Administrator
 */
public class Clientes {

    private int id_cliente;
    private String nombre_cliente;
    private String apellido_cliente;
    private Ciudades ciudad;
    private String direccion_cliente;
    private int ruc_cliente;
    private int dv_cliente;

    private int cedula_cliente;
    private String telefono_cliente;

    public Clientes() {
    }

    public Clientes(int id_cliente, String nombre_cliente, String apellido_cliente, Ciudades ciudad, String direccion_cliente, int ruc_cliente, int dv_cliente, int cedula_cliente, String telefono_cliente) {
        this.id_cliente = id_cliente;
        this.nombre_cliente = nombre_cliente;
        this.apellido_cliente = apellido_cliente;
        this.ciudad = ciudad;
        this.direccion_cliente = direccion_cliente;
        this.ruc_cliente = ruc_cliente;
        this.dv_cliente = dv_cliente;
        this.cedula_cliente = cedula_cliente;
        this.telefono_cliente = telefono_cliente;
    }

    public int getId_cliente() {
        return id_cliente;
    }

    public void setId_cliente(int id_cliente) {
        this.id_cliente = id_cliente;
    }

    public String getNombre_cliente() {
        return nombre_cliente;
    }

    public void setNombre_cliente(String nombre_cliente) {
        this.nombre_cliente = nombre_cliente;
    }

    public String getApellido_cliente() {
        return apellido_cliente;
    }

    public void setApellido_cliente(String apellido_cliente) {
        this.apellido_cliente = apellido_cliente;
    }

    public Ciudades getCiudad() {
        return ciudad;
    }

    public void setCiudad(Ciudades ciudad) {
        this.ciudad = ciudad;
    }

    public String getDireccion_cliente() {
        return direccion_cliente;
    }

    public void setDireccion_cliente(String direccion_cliente) {
        this.direccion_cliente = direccion_cliente;
    }

    public int getRuc_cliente() {
        return ruc_cliente;
    }

    public void setRuc_cliente(int ruc_cliente) {
        this.ruc_cliente = ruc_cliente;
    }

    public int getDv_cliente() {
        return dv_cliente;
    }

    public void setDv_cliente(int dv_cliente) {
        this.dv_cliente = dv_cliente;
    }

    public int getCedula_cliente() {
        return cedula_cliente;
    }

    public void setCedula_cliente(int cedula_cliente) {
        this.cedula_cliente = cedula_cliente;
    }

    public String getTelefono_cliente() {
        return telefono_cliente;
    }

    public void setTelefono_cliente(String telefono_cliente) {
        this.telefono_cliente = telefono_cliente;
    }

  
   

  
}
