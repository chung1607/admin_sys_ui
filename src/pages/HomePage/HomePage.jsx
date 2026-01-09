import React from 'react'
import Button from "../../components/ButtonComponent/ButtonComponent";
const HomePage = () => {
  return (
    <div className="bg-white text-gray-900">
      <section className="min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Quản lý nhân công gia đình <br className="hidden md:block" />
              <span className="text-blue-500">đơn giản & rõ ràng</span>
            </h1>

            <p className="text-blue-500 text-lg mb-6">
              Theo dõi công việc, ngày làm, tiền công và thông tin nhân công
              một cách dễ dàng – không còn ghi chép giấy tờ rối rắm.
            </p>

            <div className="flex gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Bắt đầu sử dụng
              </Button>
              <Button className="border border-gray-500 text-blue-500 hover:bg-gray-800">
                Xem hướng dẫn
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hidden md:block">
            <img
              src="https://illustrations.popsy.co/gray/work-from-home.svg"
              alt="Quản lý nhân công"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Giải quyết những việc thường gặp
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Feature
              title="Quản lý danh sách nhân công"
              desc="Lưu thông tin tên, số điện thoại, công việc, ghi chú rõ ràng."
            />
            <Feature
              title="Theo dõi ngày công & tiền công"
              desc="Biết rõ ai làm ngày nào, bao nhiêu công, bao nhiêu tiền."
            />
            <Feature
              title="Hạn chế nhầm lẫn, thất thoát"
              desc="Tất cả được lưu lại, dễ kiểm tra khi cần."
            />
          </div>
        </div>
      </section>

      {/* ================= SOCIAL PROOF ================= */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">
            Được sử dụng trong quản lý thực tế
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Testimonial text="Từ khi dùng web này, không còn ghi sổ tay nữa." />
            <Testimonial text="Dễ dùng, ba mẹ mình cũng xem được." />
            <Testimonial text="Biết rõ tiền công mỗi tháng, không nhầm lẫn." />
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Câu hỏi thường gặp
          </h2>

          <FAQ
            q="Có khó sử dụng không?"
            a="Không. Giao diện đơn giản, chủ yếu là nhập và xem thông tin."
          />
          <FAQ
            q="Dữ liệu có bị mất không?"
            a="Dữ liệu được lưu trữ an toàn, có thể sao lưu khi cần."
          />
          <FAQ
            q="Có dùng được trên điện thoại không?"
            a="Có. Web dùng tốt trên cả máy tính và điện thoại."
          />
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Bắt đầu quản lý nhân công dễ dàng hơn
        </h2>
        <p className="mb-6">
          Chỉ mất vài phút để tạo tài khoản và sử dụng.
        </p>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-10">
          Đăng ký ngay
        </Button>
      </section>
    </div>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{desc}</p>
    </div>
  );
}

function Testimonial({ text }) {
  return (
    <div className="bg-gray-800 rounded-xl p-6 text-gray-300 text-sm">
      “{text}”
    </div>
  );
}

function FAQ({ q, a }) {
  return (
    <div className="mb-6">
      <h4 className="font-semibold mb-1">{q}</h4>
      <p className="text-gray-400 text-sm">{a}</p>
    </div>
  );
}

export default HomePage