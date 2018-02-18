/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javawebts.controladores;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import javawebts.modelos.Categorias;
import javawebts.modelos.Marcas;

import javawebts.modelos.Productos;
import javawebts.modelos.Stocks;
import javawebts.utiles.Conexion;
import javawebts.utiles.Utiles;

/**
 *
 * @author Administrator
 */
public class ProductosControlador {

    public static boolean agregar(Productos producto) {
        boolean valor = false;
        if (Conexion.conectar()) {
            String sql = "insert into productos(nombre_producto,costo_producto,precioventa_producto,iva_producto,id_categoria,id_marca) "
                    + "values('" + producto.getNombre_producto() + "','"
                    + producto.getCosto_producto() + "','"
                    + producto.getPrecioventa_producto() + "','"
                    + producto.getIva_producto() + "','"
                    + producto.getCategoria().getId_categoria() + "','"
                    + producto.getMarca().getId_marca() + "')";
            try {
                Conexion.getSt().executeUpdate(sql, Statement.RETURN_GENERATED_KEYS);
                ResultSet keyset = Conexion.getSt().getGeneratedKeys();
                if (keyset.next()) {
                    int id_producto = keyset.getInt(1);
                    producto.setId_producto(id_producto);

                }
                valor = true;
            } catch (SQLException ex) {
                System.err.println("Error:" + ex);
            }
        }
        return valor;
    }

    public static Productos buscarId(Productos producto) {
        if (Conexion.conectar()) {
            String sql = "select * from productos a, categorias c, marcas m, stocks s "
                    + " where a.id_categoria=c.id_categoria and a.id_marca=m.id_marca and s.id_producto=a.id_producto and "
                    + "a.id_producto='" + producto.getId_producto() + "'";

            System.out.println("sql" + sql);
            try {
                ResultSet rs = Conexion.getSt().executeQuery(sql);
                if (rs.next()) {
                    producto.setNombre_producto(rs.getString("nombre_producto"));
                    producto.setCosto_producto(rs.getInt("costo_producto"));
                    producto.setPrecioventa_producto(rs.getInt("precioventa_producto"));
                    producto.setIva_producto(rs.getInt("iva_producto"));

                    Categorias categoria = new Categorias();
                    categoria.setId_categoria(rs.getInt("id_categoria"));
                    categoria.setNombre_categoria(rs.getString("nombre_categoria"));

                    producto.setCategoria(categoria);

                    Marcas marca = new Marcas();
                    marca.setId_marca(rs.getInt("id_marca"));
                    marca.setNombre_marca(rs.getString("nombre_marca"));

                    producto.setMarca(marca);

               

                } else {
                    producto.setId_producto(0);
                    producto.setNombre_producto("");
                    producto.setCosto_producto(0);
                    producto.setPrecioventa_producto(0);
                    producto.setIva_producto(0);
                    Categorias categoria = new Categorias();
                    categoria.setId_categoria(0);
                    categoria.setNombre_categoria("");

                    producto.setCategoria(categoria);

                    Marcas marca = new Marcas();
                    marca.setId_marca(0);
                    marca.setNombre_marca("");

                    producto.setMarca(marca);

                }
            } catch (SQLException ex) {
                System.err.println("Error:" + ex);
            }
        }
        return producto;

    }

    public static String buscarNombre(String nombre, int pagina) {
        int offset = (pagina - 1) * Utiles.REGISTROS_PAGINA;
        String valor = "";
        if (Conexion.conectar()) {
            try {
                String sql = "select * from productos p "
                        + "left join marcas m on p.id_marca=m.id_marca "
                        + "left join categorias c on c.id_categoria=p.id_categoria "
                        + "left join stocks s on s.id_producto=p.id_producto "
                        + "where upper(p.nombre_producto) like '%" + nombre.toUpperCase() + "%'"
                        + "order by p.id_producto offset " + offset + "limit " + Utiles.REGISTROS_PAGINA;
                System.out.println("--->" + sql);
                try (PreparedStatement ps = Conexion.getConn().prepareStatement(sql)) {
                    ResultSet rs = ps.executeQuery();
                    String tabla = "";
                    while (rs.next()) {
                        tabla += "<tr>"
                                + "<td>" + rs.getString("id_producto") + "</td>"
                                + "<td>" + rs.getString("nombre_marca") + "</td>"
                                + "<td>" + rs.getString("nombre_producto") + "</td>"
                                + "<td>" + rs.getInt("cantidad_stock") + "</td>"
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

    public static boolean modificar(Productos producto) {
        boolean valor = false;
        if (Conexion.conectar()) {
            String sql = "update productos set nombre_producto='" + producto.getNombre_producto()
                    + "',costo_producto='" + producto.getCosto_producto() + ""
                    + "',precioventa_producto='" + producto.getPrecioventa_producto() + ""
                    + "',iva_producto='" + producto.getIva_producto() + ""
                    + "',id_categoria='" + producto.getCategoria().getId_categoria() + ""
                    + "',id_marca='" + producto.getMarca().getId_marca() + ""
                    + "' where id_producto=" + producto.getId_producto();
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

    public static boolean modificarC(Productos producto) {
        boolean valor = false;
        if (Conexion.conectar()) {
            String sql = "update productos set costo_producto='" + producto.getCosto_producto()
                    + "' where id_producto=" + producto.getId_producto();
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

    public static boolean eliminar(Productos producto) {
        boolean valor = false;
        if (Conexion.conectar()) {
            String sql = "delete from productos where id_producto=" + producto.getId_producto();
            try {
                Conexion.getSt().executeUpdate(sql);
                valor = true;
            } catch (SQLException ex) {
                System.err.println("Error:" + ex);
            }
        }
        return valor;
    }

}
