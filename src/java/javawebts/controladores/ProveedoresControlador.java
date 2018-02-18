/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javawebts.controladores;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import javawebts.modelos.Ciudades;
import javawebts.modelos.Proveedores;
import javawebts.modelos.Formularios;
import javawebts.modelos.Proveedores;
import javawebts.modelos.Roles;

import javawebts.utiles.Conexion;
import javawebts.utiles.Utiles;

/**
 *
 * @author Administrator
 */
public class ProveedoresControlador {

    public static boolean agregar(Proveedores proveedor) {
        boolean valor = false;
        if (Conexion.conectar()) {
            String sql = "insert into proveedores(nombre_proveedor,id_ciudad,direccion_proveedor,telefono_proveedor,correo_proveedor,ruc_proveedor) "
                    + "values('" + proveedor.getNombre_proveedor() + "','"
                    + proveedor.getCiudad().getId_ciudad() + "','"
                    + proveedor.getDireccion_proveedor() + "','"
                    + proveedor.getTelefono_proveedor() + "','"
                    + proveedor.getCorreo_proveedor() + "','"
                    + proveedor.getRuc_proveedor() + "')";
            System.out.println(sql);
            try {
                Conexion.getSt().executeUpdate(sql);
                valor = true;
            } catch (SQLException ex) {
                System.err.println("Error:" + ex);
            }
        }
        return valor;
    }

    public static Proveedores buscarId(Proveedores proveedor) {
        if (Conexion.conectar()) {
            String sql = "select * from proveedores p, ciudades c where "
                    + " p.id_ciudad=c.id_ciudad and  "
                    + "id_proveedor='" + proveedor.getId_proveedor() + "'";

            System.out.println("id sql" + sql);
            try {
                ResultSet rs = Conexion.getSt().executeQuery(sql);
                if (rs.next()) {
                    proveedor.setNombre_proveedor(rs.getString("nombre_proveedor"));

                    proveedor.setDireccion_proveedor(rs.getString("direccion_proveedor"));
                    proveedor.setTelefono_proveedor(rs.getString("telefono_proveedor"));
                    proveedor.setCorreo_proveedor(rs.getString("correo_proveedor"));
                    proveedor.setRuc_proveedor(rs.getInt("ruc_proveedor"));
                    proveedor.setDv_proveedor(rs.getInt("dv_proveedor"));

                    Ciudades ciudad = new Ciudades();
                    ciudad.setId_ciudad(rs.getInt("id_ciudad"));
                    ciudad.setNombre_ciudad(rs.getString("nombre_ciudad"));
                    proveedor.setCiudad(ciudad);

                } else {

                    proveedor.setNombre_proveedor("");

                    proveedor.setDireccion_proveedor("");
                    proveedor.setTelefono_proveedor("");
                    proveedor.setCorreo_proveedor("");
                    proveedor.setRuc_proveedor(0);
                    proveedor.setDv_proveedor(0);

                    Ciudades ciudad = new Ciudades();
                    ciudad.setId_ciudad(0);
                    ciudad.setNombre_ciudad("");
                    proveedor.setCiudad(ciudad);

                }
            } catch (SQLException ex) {
                System.err.println("Error:" + ex);
            }
        }
        return proveedor;
    }

    public static String buscarNombre(String nombre, int pagina) {
        int offset = (pagina - 1) * Utiles.REGISTROS_PAGINA;
        String valor = "";
        if (Conexion.conectar()) {
            try {
                String sql = "select * from proveedores where upper(nombre_proveedor) like '%" + nombre.toUpperCase() + "%'"
                        + "order by id_proveedor offset " + offset + "limit " + Utiles.REGISTROS_PAGINA;
                System.out.println("--->" + sql);
                try (PreparedStatement ps = Conexion.getConn().prepareStatement(sql)) {
                    ResultSet rs = ps.executeQuery();
                    String tabla = "";
                    while (rs.next()) {
                        tabla += "<tr>"
                                + "<td>" + rs.getInt("id_proveedor") + "</td>"
                                + "<td>" + rs.getString("nombre_proveedor") + "</td>"
                                + "<td>" + rs.getString("direccion_proveedor") + "</td>"
                                + "<td>" + rs.getString("telefono_proveedor") + "</td>"
                                + "<td>" + rs.getString("correo_proveedor") + "</td>"
                                + "<td>" + rs.getInt("ruc_proveedor") + "-" + rs.getInt("dv_proveedor") + "</td>"
                                + "</tr>";
                    }
                    if (tabla.equals("")) {
                        tabla = "<tr><td colspan=2>No existen registros...</td></tr>";
                    }
                    ps.close();
                    valor = tabla;
                } catch (SQLException ex) {
                    System.err.println("Error: " + ex);
                }
                Conexion.cerrar();
            } catch (Exception ex) {
                System.err.println("Error: " + ex);
            }
        }
        Conexion.cerrar();
        return valor;
    }

    public static boolean modificar(Proveedores proveedor) {
        boolean valor = false;
        if (Conexion.conectar()) {
            String sql = "update proveedores set nombre_proveedor='" + proveedor.getNombre_proveedor()
                    + "',direccion_proveedor='" + proveedor.getDireccion_proveedor() + ""
                    + "',id_proveedor='" + proveedor.getCiudad().getId_ciudad() + ""
                    + "',telefono_proveedor='" + proveedor.getTelefono_proveedor() + ""
                    + "',correo_proveedor='" + proveedor.getCorreo_proveedor() + ""
                    + "',ruc_proveedor='" + proveedor.getRuc_proveedor() + ""
                    + "' where id_proveedor=" + proveedor.getId_proveedor();
            System.out.println(sql);
            try {
                Conexion.getSt().executeUpdate(sql);
                valor = true;
            } catch (SQLException ex) {
                System.err.println("Error:" + ex);
            }
        }
        return valor;
    }

    public static boolean eliminar(Proveedores proveedor) {
        boolean valor = false;
        if (Conexion.conectar()) {
            String sql = "delete from proveedores where id_proveedor=" + proveedor.getId_proveedor();
            try {
                Conexion.getSt().executeUpdate(sql);
                valor = true;
            } catch (SQLException ex) {
                System.err.println("Error:" + ex);
            }
        }
        return valor;
    }

    // public static Proveedores buscarCedula(int id) {
    //    Proveedores proveedor = null;
    //  if (Conexion.conectar()) {
    //    String sql = "select* from proveedores where ci_proveedor='" + id + "'";
    //   try {
    //      ResultSet rs = Conexion.getSt().executeQuery(sql);
    //    if (rs.next()) {
    //      proveedor = new Proveedores();
    //     proveedor.setCi_proveedor(0);
    // }
    // } catch (SQLException ex) {
    //   System.err.println("Error:" + ex);
    //}
    //}
    //  return proveedor;
    //}
    public static Proveedores buscarVerificador(int id) {
        Proveedores proveedor = null;
        if (Conexion.conectar()) {

            String sql = "select procedimentodv(" + id + ") as digito";

            System.out.println("sql digito " + sql);
            try {
                ResultSet rs = Conexion.getSt().executeQuery(sql);
                if (rs.next()) {
                    proveedor = new Proveedores();

                    proveedor.setDv_proveedor(rs.getInt("digito"));

                } else {
                    proveedor = new Proveedores();
                    proveedor.setDv_proveedor(0);

                }
            } catch (SQLException ex) {
                System.err.println("Error:" + ex);
            }
        }
        return proveedor;
    }

}
