package Kyrsovaya.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kyrsovaya.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Транзакция_
 */
@Entity(name = "IISKyrsovayaТранзакция_")
@Table(schema = "public", name = "Транзакция_")
public class Tranzakciya_ {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Номер")
    private Integer номер;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Bilety")
    @Convert("Bilety")
    @Column(name = "Билеты", length = 16, unique = true, nullable = false)
    private UUID _biletyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Bilety", insertable = false, updatable = false)
    private Bilety bilety;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Klient_")
    @Convert("Klient_")
    @Column(name = "Клиент_", length = 16, unique = true, nullable = false)
    private UUID _klient_id;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Klient_", insertable = false, updatable = false)
    private Klient_ klient_;


    public Tranzakciya_() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомер() {
      return номер;
    }

    public void setНомер(Integer номер) {
      this.номер = номер;
    }


}