import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Mail, User, MessageSquare, Send, CheckCircle2 } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Label } from './ui/label'

type ContactFormData = {
  name: string
  email: string
  subject: string
  message: string
}

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    // フォーム送信のシミュレーション
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log('Form submitted:', data)
    setIsSubmitted(true)

    // 3秒後にフォームをリセット
    setTimeout(() => {
      setIsSubmitted(false)
      reset()
    }, 3000)
  }

  return (
    <section className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-6">お問い合わせ</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            GLOBIS Tech Guildへのご質問やご意見、参加のお問い合わせはこちらからお送りください。
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          {isSubmitted ? (
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-12 rounded-2xl text-center">
              <CheckCircle2 className="w-16 h-16 text-white mx-auto mb-4" />
              <h3 className="text-3xl text-white mb-4">送信完了</h3>
              <p className="text-cyan-100 text-lg">
                お問い合わせありがとうございます。
                <br />
                内容を確認の上、担当者より折り返しご連絡させていただきます。
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-gray-800 p-8 md:p-12 rounded-2xl border border-gray-700"
            >
              <div className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white text-base">
                    <User className="w-4 h-4" />
                    お名前
                    <span className="text-cyan-400 ml-1">*</span>
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="山田 太郎"
                    {...register('name', {
                      required: 'お名前を入力してください',
                      minLength: {
                        value: 2,
                        message: 'お名前は2文字以上で入力してください',
                      },
                    })}
                    className={`bg-gray-900 border-gray-600 text-white placeholder:text-gray-500 ${
                      errors.name ? 'border-red-500' : ''
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white text-base">
                    <Mail className="w-4 h-4" />
                    メールアドレス
                    <span className="text-cyan-400 ml-1">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                    {...register('email', {
                      required: 'メールアドレスを入力してください',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: '有効なメールアドレスを入力してください',
                      },
                    })}
                    className={`bg-gray-900 border-gray-600 text-white placeholder:text-gray-500 ${
                      errors.email ? 'border-red-500' : ''
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Subject Field */}
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-white text-base">
                    <MessageSquare className="w-4 h-4" />
                    件名
                    <span className="text-cyan-400 ml-1">*</span>
                  </Label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="お問い合わせの件名を入力してください"
                    {...register('subject', {
                      required: '件名を入力してください',
                      minLength: {
                        value: 3,
                        message: '件名は3文字以上で入力してください',
                      },
                    })}
                    className={`bg-gray-900 border-gray-600 text-white placeholder:text-gray-500 ${
                      errors.subject ? 'border-red-500' : ''
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white text-base">
                    <MessageSquare className="w-4 h-4" />
                    お問い合わせ内容
                    <span className="text-cyan-400 ml-1">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="お問い合わせの内容を詳しくご記入ください"
                    rows={6}
                    {...register('message', {
                      required: 'お問い合わせ内容を入力してください',
                      minLength: {
                        value: 10,
                        message: 'お問い合わせ内容は10文字以上で入力してください',
                      },
                    })}
                    className={`bg-gray-900 border-gray-600 text-white placeholder:text-gray-500 resize-none ${
                      errors.message ? 'border-red-500' : ''
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-6 text-lg rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        送信中...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        送信する
                      </span>
                    )}
                  </Button>
                </div>

                {/* Privacy Note */}
                <p className="text-gray-400 text-sm text-center pt-2">
                  送信いただいた個人情報は、お問い合わせへの対応のみに使用いたします。
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
