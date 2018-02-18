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
import javawebts.modelos.DetallesVentas;
import javawebts.modelos.Stocks;
import javawebts.utiles.Conexion;

/**
 *
 * @author Administrator
 */
public class StocksControlador {

    public static boolean agregar(Stocks stock) throws SQLException {
        boolean valor = false;
        if (Conexion.conectar()) {
            //  int v1 = compra.getProveedor().getId_proveedor();
            //  Date v2 = compra.getFecha_compra();
            String sql = "insert into stocks(id_producto,min_stock,max_stock,cantidad_stock) "
                    + "values('" + stock.getProducto().getId_producto() + "','"
                    + stock.getMin_stock() + "','"
                    + stock.getMax_stock() + "','"
                    + stock.getCantidad_stock() + "')";
            System.out.println("--> " + sql);
            try {
                Conexion.getSt().executeUpdate(sql, Statement.RETURN_GENERATED_KEYS);
                ResultSet keyset = Conexion.getSt().getGeneratedKeys();
                if (keyset.next()) {
                    int id_stock = keyset.getInt(1);
                    stock.setId_stock(id_stock);
                    Conexion.getConn().commit();
                }
                valor = true;
            } catch (SQLException ex) {
                System.out.println("--> " + ex.getLocalizedMessage());
            }
            Conexion.cerrar();
        }

        return valor;
    }

    public static boolean agregarProdStock(Stocks stock) {
        boolean valor = false;
        if (Conexion.conectar()) {
            String sql = "update stocks set cantidad_stock=cantidad_stock + '" + stock.getCantidad_stock()
                    + "' where id_producto=" + stock.getProducto().getId_producto();
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

    public static boolean RestarProdStock(Stocks stock) {
        boolean valor = false;
        if (Conexion.conectar()) {
            String sql = "update stocks set cantidad_stock=cantidad_stock - '" + stock.getCantidad_stock()
                    + "' where id_producto=" + stock.getProducto().getId_producto();
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

    public static Stocks buscarId(Stocks stock) {
        if (Conexion.conectar()) {
            String sql = "select * from stocks "
                    + " where id_producto='" + stock.getProducto().getId_producto() + "'";

            System.out.println("sql" + sql);
            try {
                ResultSet rs = Conexion.getSt().executeQuery(sql);
                if (rs.next()) {

                    stock.setMax_stock(rs.getInt("max_stock"));
                    stock.setMin_stock(rs.getInt("min_stock"));
                    
                    
                } else {

                    stock.setMax_stock(0);
                    stock.setMin_stock(0);
                    
                }
            } catch (SQLException ex) {
                System.err.println("Error:" + ex);
            }
        }
        return stock;

    }
    
     public static boolean restarDetalle(Stocks stock) throws SQLException {
        boolean valor = false;
        if (Conexion.conectar()) {
            String sql = "update stocks set cantidad_stock=? where id_producto=?"  ;
            try (PreparedStatement ps = Conexion.getConn().prepareStatement(sql)) {
                
                ps.setInt(1, stock.getCantidad_stock());
                ps.setInt(2, stock.getProducto().getId_producto());
                ps.executeUpdate();
                ps.close();
                Conexion.getConn().commit();
                valor = true;
            } catch (SQLException ex) {
                System.out.println("--> " + ex.getLocalizedMessage());
                try {
                    Conexion.getConn().rollback();
                } catch (SQLException ex1) {
                    System.out.println("--> " + ex1.getLocalizedMessage());
                }
            }
        }
        Conexion.cerrar();
        return valor;
    }
     
     
      public static boolean ModificarDetalle(Stocks stock) {
        boolean valor = false;
        if (Conexion.conectar()) {
            String sql = "update stocks set cantidad_stock=cantidad_stock + '" + stock.getCantidad_stock()
                    + "' where id_producto=" + stock.getProducto().getId_producto();
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
     
      
      
       public static Stocks buscarCantidad(Stocks stock) {
        if (Conexion.conectar()) {
            String sql = "select * from stocks "
                    + " where id_producto='" + stock.getProducto().getId_producto() + "'";

            System.out.println("sql" + sql);
            try {
                ResultSet rs = Conexion.getSt().executeQuery(sql);
                if (rs.next()) {
                    
                   // stock.setId_stock(rs.getInt("id_stock"));
                    
                    
                int  can = stock.getCantidad_stock();
                  int   canti = Integer.parseInt(rs.getString("cantidad_stock"));
                  
                    System.out.println("venta "+stock.getCantidad_stock());
                    System.out.println("stock "+canti);
                    
                  if (can<canti){
                      
                     stock.setCantidad_stock(can);
                    
                    
                      
                  }else
                  if (can==canti){
                     stock.setCantidad_stock(can);
                      
                     
                  }else{
                      if(can>canti){
                           stock.setCantidad_stock(0);
                      }
                  }
                      
              
                    
                    
                } 
            } catch (SQLException ex) {
                System.err.println("Error:" + ex);
            }
        }
        return stock;

    }
      

}
