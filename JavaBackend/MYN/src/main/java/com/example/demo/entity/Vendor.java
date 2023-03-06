package com.example.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "vendor")
public class Vendor {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "vendor_id")
	int vendorid;
	
	@OneToOne
	@JoinColumn(name="user_id")
	User userid;

	public Vendor() {
		super();
		
	}

	public Vendor(int vendorid, User userid) {
		super();
		this.vendorid = vendorid;
		this.userid = userid;
	}

	public int getVendorid() {
		return vendorid;
	}

	public void setVendorid(int vendorid) {
		this.vendorid = vendorid;
	}

	public User getUserid() {
		return userid;
	}

	public void setUserid(User userid) {
		this.userid = userid;
	}

	@Override
	public String toString() {
		return "Vendor [vendorid=" + vendorid + ", userid=" + userid + "]";
	}
	
    
}
