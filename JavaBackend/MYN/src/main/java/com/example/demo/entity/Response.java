package com.example.demo.entity;

import java.util.Date;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "responses")
public class Response 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "response_id")
	private int rid;
	
	@ManyToOne()
	@JoinColumn(name="request_id")
	private Request reqid;
	@Column(name="vendor_id")
	private int vid;
	@Column(name="response_date")
	Date date;
	@Column
	String description;
	public Response() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Response(int rid, Request reqid, int vid, Date date, String description) {
		super();
		this.rid = rid;
		this.reqid = reqid;
		this.vid = vid;
		this.date = date;
		this.description = description;
	}
	public int getRid() {
		return rid;
	}
	public void setRid(int rid) {
		this.rid = rid;
	}
	public Request getReqid() {
		return reqid;
	}
	public void setReqid(Request reqid) {
		this.reqid = reqid;
	}
	public int getVid() {
		return vid;
	}
	public void setVid(int vid) {
		this.vid = vid;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	
}
