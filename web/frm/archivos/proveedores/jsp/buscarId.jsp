<%@page import="org.json.simple.JSONObject"%>
<%@page import="javawebts.controladores.ProveedoresControlador"%>
<%@page import="javawebts.modelos.Proveedores"%>
<%
    int id_proveedor = 0;
    if (request.getParameter("id_proveedor") != "") {
        id_proveedor = Integer.parseInt(request.getParameter("id_proveedor"));
    }
    String tipo = "error";
    String mensaje = "Datos no encontrados.";
    String nuevo = "true";
    Proveedores proveedor = new Proveedores();
    proveedor.setId_proveedor(id_proveedor);

    proveedor = ProveedoresControlador.buscarId(proveedor);
    if (id_proveedor != 0) {
        tipo = "success";
        mensaje = "Datos encontrados";
        nuevo = "false";
    }
    JSONObject obj = new JSONObject();
    obj.put("tipo", tipo);
    obj.put("mensaje", mensaje);
    obj.put("nuevo", nuevo);

    obj.put("id_proveedor", proveedor.getId_proveedor());
    obj.put("nombre_proveedor", proveedor.getNombre_proveedor());
    obj.put("id_ciudad", proveedor.getCiudad().getId_ciudad());
    obj.put("nombre_ciudad",proveedor.getCiudad().getNombre_ciudad());
  
    obj.put("direccion_proveedor", proveedor.getDireccion_proveedor());
    obj.put("telefono_proveedor", proveedor.getTelefono_proveedor());
    obj.put("correo_proveedor", proveedor.getCorreo_proveedor());
    obj.put("ruc_proveedor", proveedor.getRuc_proveedor());
    obj.put("dv_proveedor", proveedor.getDv_proveedor());
    
   
    out.print(obj);
    out.flush();
%>