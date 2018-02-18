package javawebts.utiles;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.text.DecimalFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.regex.Pattern;

public class Utiles {

    public static final int REGISTROS_PAGINA = 10;

    public static String quitarGuiones(String texto) {
        return texto.replace("--", "");
    }

    public static String md5(String palabra) {
        String palabraMD5 = "";
        try {
            MessageDigest md = MessageDigest.getInstance("MD5");
            byte[] b = md.digest(palabra.getBytes());
            int size = b.length;
            StringBuffer sb = new StringBuffer(size);
            for (int i = 0; i < size; i++) {
                int u = b[i] & 255;
                if (u < 16) {
                    sb.append("0" + Integer.toHexString(u));
                } else {
                    sb.append(Integer.toHexString(u));
                }
            }
            palabraMD5 = sb.toString();
        } catch (NoSuchAlgorithmException ex) {
            ex.printStackTrace();
        }
        return palabraMD5;
    }

    public static java.sql.Date utilToSqlDate(java.util.Date utilDate) {
        return new java.sql.Date(utilDate.getTime());
    }

    public static java.util.Date sqlToUtilDate(java.sql.Date sqlDate) {
        return new java.util.Date(sqlDate.getTime());
    }

    public static java.util.Date stringToUtilDate(String fecha) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        java.util.Date utilDate = new java.util.Date();
        try {
            utilDate = sdf.parse(fecha);
        } catch (ParseException ex) {
            Logger.getLogger(Utiles.class.getName()).log(Level.SEVERE, null, ex);
        }
        return utilDate;
    }

    public static java.sql.Date stringToSqlDate(String fecha) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        java.util.Date utilDate = new java.util.Date();
        java.sql.Date sqlDate = null;
        try {
            utilDate = sdf.parse(fecha);
            sqlDate = new java.sql.Date(utilDate.getTime());
        } catch (ParseException ex) {
            Logger.getLogger(Utiles.class.getName()).log(Level.SEVERE, null, ex);
        }
        return sqlDate;
    }

    public static String sqlDateToString(java.sql.Date fecha) {
        String string;
        Calendar calendar = GregorianCalendar.getInstance();
        calendar.setTime(fecha);
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        string = sdf.format(fecha);
        return string;
    }

    public static String quitarGuionesCompra(String texto) {
        return texto.replace("-", "");
    }

    public static String agregarGuionesCompra(String texto) {
        return texto.replace("", "-");
    }

    static public void customFormat(String pattern, double value) {
        DecimalFormat myFormatter = new DecimalFormat(pattern);
        String output = myFormatter.format(value);
        System.out.println(value + "  " + pattern + "  " + output);
    }

    static public void main2(String[] args) {
        customFormat("", 5);
    }

    private static final Pattern REGEX_PATTERN
            = Pattern.compile("^(0034|\\+34)?(\\d\\d\\d)-? ?(\\d\\d)-? ?(\\d)-? ?(\\d)-? ?(\\d\\d)$", Pattern.MULTILINE);

    public static void main(int[] args) {
        String input = "666444555\n666-444-555\n666 44 45 55\n666-44-45-55\n+34666555444\n0034666555444";

        System.out.println(
                REGEX_PATTERN.matcher(input).replaceAll("+34 $2 $3$4 $5$6")
        );
    }

}
