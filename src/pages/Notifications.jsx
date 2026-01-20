import { useState } from "react";

export default function Notifications() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "offer",
      title: "Special Offer 🎉",
      message: "Get flat 25% OFF on construction materials this week.",
      time: "5 min ago",
      read: false,
    },
    {
      id: 2,
      type: "enquiry",
      title: "Enquiry Response",
      message: "We have replied to your enquiry. Please check your email.",
      time: "1 hour ago",
      read: false,
    },
    {
      id: 3,
      type: "offer",
      title: "New Deal Available",
      message: "Cement & TMT bars now at best wholesale prices.",
      time: "Yesterday",
      read: true,
    },
  ]);

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, read: true } : item
      )
    );
  };

  const getIcon = (type) => {
    if (type === "offer") return "local_offer";
    if (type === "enquiry") return "support_agent";
    return "notifications";
  };

  return (
    <div className="w-full min-h-screen px-4 pt-4 pb-20">

      {/* Empty State */}
      {notifications.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-32 text-gray-500">
          <span className="material-symbols-rounded text-6xl mb-3">
            notifications_off
          </span>
          <p>No notifications available</p>
        </div>
      ) : (
        <div className="space-y-3">

          {notifications.map((item) => (
            <div
              key={item.id}
              onClick={() => markAsRead(item.id)}
              className={`rounded-2xl p-4 shadow-sm cursor-pointer transition
                ${
                  item.read
                    ? "bg-white"
                    : "bg-blue-50 border border-blue-200"
                }`}
            >
              <div className="flex items-start gap-3">

                {/* Icon */}
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center
                    ${
                      item.read
                        ? "bg-gray-200 text-gray-600"
                        : "bg-blue-600 text-white"
                    }`}
                >
                  <span className="material-symbols-rounded">
                    {getIcon(item.type)}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800">
                    {item.title}
                  </h4>

                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                    {item.message}
                  </p>

                  <p className="text-xs text-gray-400 mt-2">
                    {item.time}
                  </p>
                </div>

                {/* Unread dot */}
                {!item.read && (
                  <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mt-2"></span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
