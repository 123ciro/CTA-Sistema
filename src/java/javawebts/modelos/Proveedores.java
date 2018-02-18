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
public class Proveedores {

    private int id_proveedor;
    private String nombre_proveedor;
    private int dv_proveedor;
    private String direccion_proveedor;
    private String telefono_proveedor;
    private String correo_proveedor;
    private int ruc_proveedor;
    private Ciudades ciudad;

    public Proveedores() {
    }

    public Proveedores(int id_proveedor, String nombre_proveedor, int dv_proveedor, String direccion_proveedor, String telefono_proveedor, String correo_proveedor, int ruc_proveedor, Ciudades ciudad) {
        this.id_proveedor = id_proveedor;
        this.nombre_proveedor = nombre_proveedor;
        this.dv_proveedor = dv_proveedor;
        this.direccion_proveedor = direccion_proveedor;
        this.telefono_proveedor = telefono_proveedor;
        this.correo_proveedor = correo_proveedor;
        this.ruc_proveedor = ruc_proveedor;
        this.ciudad = ciudad;
    }

    public int getId_proveedor() {
        return id_proveedor;
    }

    public void setId_proveedor(int id_proveedor) {
        this.id_proveedor = id_proveedor;
    }

    public String getNombre_proveedor() {
        return nombre_proveedor;
    }

    public void setNombre_proveedor(String nombre_proveedor) {
        this.nombre_proveedor = nombre_proveedor;
    }

    public int getDv_proveedor() {
        return dv_proveedor;
    }

    public void setDv_proveedor(int dv_proveedor) {
        this.dv_proveedor = dv_proveedor;
    }

    public String getDireccion_proveedor() {
        return direccion_proveedor;
    }

    public void setDireccion_proveedor(String direccion_proveedor) {
        this.direccion_proveedor = direccion_proveedor;
    }

    public String getTelefono_proveedor() {
        return telefono_proveedor;
    }

    public void setTelefono_proveedor(String telefono_proveedor) {
        this.telefono_proveedor = telefono_proveedor;
    }

    public String getCorreo_proveedor() {
        return correo_proveedor;
    }

    public void setCorreo_proveedor(String correo_proveedor) {
        this.correo_proveedor = correo_proveedor;
    }

    public int getRuc_proveedor() {
        return ruc_proveedor;
    }

    public void setRuc_proveedor(int ruc_proveedor) {
        this.ruc_proveedor = ruc_proveedor;
    }

    public Ciudades getCiudad() {
        return ciudad;
    }

    public void setCiudad(Ciudades ciudad) {
        this.ciudad = ciudad;
    }

  

   
    
    
  
}
