package Kyrsovaya.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kyrsovaya.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: Билеты
 */
@Entity(name = "IISKyrsovayaБилеты")
@Table(schema = "public", name = "Билеты")
public class Bilety {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ПунктОтпр")
    private String пунктотпр;

    @Column(name = "ДатаПоездки")
    private Date датапоездки;

    @Column(name = "ДатаПокупки")
    private Date датапокупки;

    @Column(name = "Место")
    private Integer место;

    @Column(name = "ПунктНазнач")
    private String пунктназнач;

    @Column(name = "ВремяПокупки")
    private String времяпокупки;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Klient_")
    @Convert("Klient_")
    @Column(name = "Клиент_", length = 16, unique = true, nullable = false)
    private UUID _klient_id;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Klient_", insertable = false, updatable = false)
    private Klient_ klient_;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "BiletKassa")
    @Convert("BiletKassa")
    @Column(name = "БилетКасса", length = 16, unique = true, nullable = false)
    private UUID _biletkassaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "BiletKassa", insertable = false, updatable = false)
    private BiletKassa biletkassa;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Perevozchik")
    @Convert("Perevozchik")
    @Column(name = "Перевозчик", length = 16, unique = true, nullable = false)
    private UUID _perevozchikid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Perevozchik", insertable = false, updatable = false)
    private Perevozchik perevozchik;


    public Bilety() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getПунктОтпр() {
      return пунктотпр;
    }

    public void setПунктОтпр(String пунктотпр) {
      this.пунктотпр = пунктотпр;
    }

    public Date getДатаПоездки() {
      return датапоездки;
    }

    public void setДатаПоездки(Date датапоездки) {
      this.датапоездки = датапоездки;
    }

    public Date getДатаПокупки() {
      return датапокупки;
    }

    public void setДатаПокупки(Date датапокупки) {
      this.датапокупки = датапокупки;
    }

    public Integer getМесто() {
      return место;
    }

    public void setМесто(Integer место) {
      this.место = место;
    }

    public String getПунктНазнач() {
      return пунктназнач;
    }

    public void setПунктНазнач(String пунктназнач) {
      this.пунктназнач = пунктназнач;
    }

    public String getВремяПокупки() {
      return времяпокупки;
    }

    public void setВремяПокупки(String времяпокупки) {
      this.времяпокупки = времяпокупки;
    }


}