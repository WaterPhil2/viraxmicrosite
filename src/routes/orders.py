from flask import Blueprint, jsonify

orders_bp = Blueprint("orders", __name__)

# This is a mock database of orders
orders = []

@orders_bp.route("/api/orders", methods=["GET"])
def get_orders():
    return jsonify(orders)

@orders_bp.route("/api/orders/<int:order_id>", methods=["GET"])
def get_order(order_id):
    if order_id < len(orders):
        return jsonify(orders[order_id])
    return jsonify({"error": "Order not found"}), 404


